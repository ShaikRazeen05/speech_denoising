# Speech Denoising
 1  Time | Full audio split into fixed-length frames |

 2  Time → Frequency | Each frame is converted via STFT to spectrogram (magnitude + phase) |

 3  Magnitude to Model | Magnitude (in dB) is normalized and fed into the U-Net |

 4  Model Output | Predicts noise pattern in magnitude space |

 5 Subtract Noise | Clean magnitude = noisy magnitude − predicted noise |

 6  Reconstruct | Combine clean magnitude + original phase → time-domain audio |
