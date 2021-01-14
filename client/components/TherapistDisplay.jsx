import React from 'react';
import TherapistCard from '../components/views/TherapistCard.jsx'

export default function TherapistDisplay ({user}) {
  const therapists = user && user.therapists ? user.therapists : [];
  const renderedTherapists = therapists.map((therapist => <TherapistCard key={therapist._id} therapist={therapist} />)) || '';
  return (
    <>
      {renderedTherapists}
    </>
  )
}