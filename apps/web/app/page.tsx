'use client';
import { useState } from 'react';
import * as tf from '@tensorflow/tfjs';

import Button from '@/components/button';
import EthIcon from '@/components/ethIcon';

export default function Page(): JSX.Element {
  const [prediction, setPrediction] = useState(0);

  async function calcCnn() {
    setPrediction(0);
    const model = await tf.loadLayersModel('/models/eth_model_cnn/model.json');
    const pT = tf.tensor3d(
      [
        1949.39, 1949.84, 1955.63, 1954.19, 1956.77, 1956.01, 1956.97, 1960.53,
        1958, 1954.86, 1950.52, 1948.81, 1953.49, 1952.13, 1954.01, 1963.34,
        1956.6, 1954.24, 1951.6, 1955.55, 1955.34, 1957.41, 1958.52, 1967.39,
        1970.51, 1964.22, 1964.12, 1968.17, 1960.49, 1963.99,
      ],
      [30, 1, 1]
    );
    const predict = model.predict(pT);
    // @ts-ignore
    setPrediction(predict.arraySync()[0]);
  }

  async function calcAverage() {
    setPrediction(0);
    const model = await tf.loadLayersModel(
      '/models/eth_model_average/model.json'
    );
    const pT = tf.tensor2d(
      [
        [
          1949.39, 1949.84, 1955.63, 1954.19, 1956.77, 1956.01, 1956.97,
          1960.53, 1958, 1954.86, 1950.52, 1948.81, 1953.49, 1952.13, 1954.01,
          1963.34, 1956.6, 1954.24, 1951.6, 1955.55, 1955.34, 1957.41, 1958.52,
          1967.39, 1970.51, 1964.22, 1964.12, 1968.17, 1960.49, 1963.99,
        ],
      ],
      [1, 30]
    );
    const predict = model.predict(pT);
    // @ts-ignore
    setPrediction(predict.arraySync()[0]);
  }

  return (
    <main className='flex justify-center'>
      <div className='w-3/4 mt-8'>
        <EthIcon />
        <p>eth next hour prediction is {prediction}</p>
        <Button onClick={() => calcAverage()}>Calc average</Button>
        <Button onClick={() => calcCnn()}>Calc CNN</Button>
      </div>
    </main>
  );
}
