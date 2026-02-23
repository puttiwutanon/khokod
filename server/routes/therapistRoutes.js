import express from 'express';
import axios from 'axios';

const router = express.Router();
const MAPS_PLATFORM_API_KEY = process.env.MAPS_PLATFORM_API_KEY;

router.get('/nearby', async (req, res) => {
  const { lat, lng, radius = 5000 } = req.query;

  if (!lat || !lng) {
    return res.status(400).json({ error: 'Missing lat or lng' });
  }

  try {
    const response = await axios.get(
      'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
      {
        params: {
          location: `${lat},${lng}`,
          radius,
          keyword: 'จิตแพทย์|นักจิตวิทยา|psychiatrist',
          type: 'doctor',
          key: MAPS_PLATFORM_API_KEY,
        }
      }
    );
    res.json(response.data.results);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch therapists' });
  }
});

router.get('/geocode', async (req, res) => {
  const { address } = req.query;

  if (!address) return res.status(400).json({ error: 'Missing address' });

  try {
    const response = await axios.get(
      'https://maps.googleapis.com/maps/api/geocode/json',
      {
        params: {
          address,
          key: MAPS_PLATFORM_API_KEY,
        }
      }
    );

    const result = response.data.results[0];
    if (!result) return res.status(404).json({ error: 'Location not found' });

    res.json({
      lat: result.geometry.location.lat,
      lng: result.geometry.location.lng,
    });
  } catch (err) {
    res.status(500).json({ error: 'Geocoding failed' });
  }
});

export default router;