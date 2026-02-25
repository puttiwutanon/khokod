import express from 'express';
import { db } from '../config/firebase.js';
import { collection, doc, setDoc, getDocs, Timestamp } from 'firebase/firestore';

const router = express.Router();

router.post('/save', async (req, res) => {
  const { userId, date, mood } = req.body;

  if (!userId || !date || !mood) {
    return res.status(400).json({ error: 'Missing userId, date or mood' });
  }

  try {
    await setDoc(doc(db, 'moodCalendar', `${userId}_${date}`), {
      userId,
      date,
      mood,
      timestamp: new Date(),
    });
    res.json({ success: true });
  } catch (err) {
    console.log('Firestore error:', err);
    res.status(500).json({ error: 'Failed to save mood' });
  }
});

router.get('/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const snapshot = await getDocs(collection(db, 'moodCalendar'));
    const moods = {};
    snapshot.forEach(document => {
      const data = document.data();
      if (data.userId === userId) {
        moods[data.date] = data;
      }
    });
    res.json(moods);
  } catch (err) {
    console.log('Firestore error:', err);
    res.status(500).json({ error: 'Failed to get moods' });
  }
});

export default router;