import express from 'express';
import { db } from '../config/firebase.js';
import admin from 'firebase-admin';

const router = express.Router();

// save medication
router.post('/save', async (req, res) => {
  const { userId, name, detail, time } = req.body;

  if (!userId || !name || !time) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const ref = await db
      .collection('users')
      .doc(userId)
      .collection('medications')
      .add({
        name,
        detail: detail || '',
        time,
        createdAt: admin.firestore.Timestamp.now(),
      });

    res.json({ success: true, id: ref.id });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save medication' });
  }
});

// get all medications for a user
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const snapshot = await db
      .collection('users')
      .doc(userId)
      .collection('medications')
      .get();

    const medications = [];
    snapshot.forEach(doc => {
      medications.push({ id: doc.id, ...doc.data() });
    });

    res.json(medications);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get medications' });
  }
});

// delete medication
router.delete('/:userId/:medicationId', async (req, res) => {
  const { userId, medicationId } = req.params;

  try {
    await db
      .collection('users')
      .doc(userId)
      .collection('medications')
      .doc(medicationId)
      .delete();

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete medication' });
  }
});

export default router;