/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import anime from 'animejs';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import './App.css';

// Chart.js 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AnimatedBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #61dafb;
  margin: 20px auto;
`;

const ChartContainer = styled.div`
  width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const App: React.FC = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  // 차트 데이터
  const chartData = {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
    datasets: [
      {
        label: '월별 데이터',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: '월별 데이터 차트'
      }
    }
  };

  useEffect(() => {
    if (boxRef.current) {
      anime({
        targets: boxRef.current,
        translateX: 250,
        rotate: '1turn',
        backgroundColor: '#FFC0CB',
        duration: 2000,
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutQuad'
      });
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <AnimatedBox ref={boxRef} />
        <ChartContainer>
          <Line options={chartOptions} data={chartData} />
        </ChartContainer>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
