import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Button, Typography, Box, List, ListItem, Container } from '@mui/material';

const Timer: React.FC = () => {
  const [time, setTime] = useState(0); 
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);
  const [speed, setSpeed] = useState(1); 

  useEffect(() => {
    let interval: number;
    if (running) {
      interval = window.setInterval(() => setTime(t => t + 1), 1000 / speed);
    }
    return () => clearInterval(interval);
  }, [running, speed]);

  const formatTime = (sec: number) => {
    const h = String(Math.floor(sec / 3600)).padStart(2, '0');
    const m = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
    const s = String(sec % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const recordLap = () => setLaps([...laps, time]);

  const toggleSpeed = () => {
    if (speed === 1) setSpeed(2);    
    else if (speed === 2) setSpeed(0.5); 
    else setSpeed(1);               
  };

  const reset = () => {
    setRunning(false);
    setTime(0);
    setLaps([]);
    setSpeed(1);
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h4" gutterBottom>Секундомер</Typography>
      <Typography variant="h3" gutterBottom>{formatTime(time)}</Typography>

      <Box sx={{ mb: 2 }}>
        <Button variant="contained" onClick={() => setRunning(!running)} sx={{ mr: 1 }}>
          {running ? 'Стоп' : 'Старт'}
        </Button>
        <Button variant="outlined" onClick={reset} sx={{ mr: 1 }}>Сброс</Button>
        <Button variant="outlined" onClick={recordLap} sx={{ mr: 1 }}>Круг</Button>
        <Button variant="contained" onClick={toggleSpeed}>
          {speed === 1 ? 'Ускорить' : speed === 2 ? 'Замедлить' : 'Нормально'}
        </Button>
      </Box>

      {laps.length > 0 && (
        <Box>
          <Typography variant="h6">Круги:</Typography>
          <List>
            {laps.map((lap, i) => (
              <ListItem key={i}>{i + 1}. {formatTime(lap)}</ListItem>
            ))}
          </List>
        </Box>
      )}
    </Container>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<Timer />);