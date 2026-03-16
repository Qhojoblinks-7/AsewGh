import React, { createContext, useContext, useState, useMemo } from 'react';

const DnaContext = createContext(null);

// Default DNA profile structure
const DEFAULT_DNA = {
  anatomical: {
    confidenceScore: 85,
    isProVerified: true,
    lastMeasured: '2026-03-01',
    measurements: {
      neck: { value: 14.5, unit: 'in' },
      shoulder: { value: 18, unit: 'in' },
      chest: { value: 40, unit: 'in' },
      waist: { value: 32, unit: 'in' },
      hips: { value: 38, unit: 'in' },
      inseam: { value: 30, unit: 'in' },
      sleeve: { value: 24, unit: 'in' },
    },
  },
  aesthetic: {
    modernScore: 70,
    traditionalScore: 30,
    styleClusters: ['Kente', 'Streetwear', 'Brocade'],
    fabricAffinities: ['Kente', 'Linen', 'Cotton'],
  },
  transactional: {
    isVerified: true,
    ghanaPostGps: 'GA-123-4567',
    graCertification: true,
    loyaltyTier: 'Gold',
    totalOrders: 12,
  },
};

export const DnaProvider = ({ children }) => {
  const [dna, setDna] = useState(DEFAULT_DNA);

  // Update measurements
  const updateMeasurements = (newMeasurements) => {
    setDna((prev) => ({
      ...prev,
      anatomical: {
        ...prev.anatomical,
        measurements: { ...prev.anatomical.measurements, ...newMeasurements },
        lastMeasured: new Date().toISOString().split('T')[0],
      },
    }));
  };

  // Update confidence score
  const updateConfidenceScore = (score) => {
    setDna((prev) => ({
      ...prev,
      anatomical: {
        ...prev.anatomical,
        confidenceScore: score,
        isProVerified: score >= 80,
      },
    }));
  };

  // Update aesthetic preferences
  const updateAesthetic = (updates) => {
    setDna((prev) => ({
      ...prev,
      aesthetic: { ...prev.aesthetic, ...updates },
    }));
  };

  // Add style cluster
  const addStyleCluster = (cluster) => {
    setDna((prev) => ({
      ...prev,
      aesthetic: {
        ...prev.aesthetic,
        styleClusters: [...new Set([...prev.aesthetic.styleClusters, cluster])],
      },
    }));
  };

  // Add fabric affinity
  const addFabricAffinity = (fabric) => {
    setDna((prev) => ({
      ...prev,
      aesthetic: {
        ...prev.aesthetic,
        fabricAffinities: [...new Set([...prev.aesthetic.fabricAffinities, fabric])],
      },
    }));
  };

  const value = useMemo(
    () => ({
      dna,
      updateMeasurements,
      updateConfidenceScore,
      updateAesthetic,
      addStyleCluster,
      addFabricAffinity,
    }),
    [dna]
  );

  return <DnaContext.Provider value={value}>{children}</DnaContext.Provider>;
};

export const useDna = () => {
  const context = useContext(DnaContext);
  if (!context) {
    throw new Error('useDna must be used within a DnaProvider');
  }
  return context;
};

export default DnaContext;
