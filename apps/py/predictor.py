from fastapi import FastAPI
import tensorflow as tf


class PredictorAPI(FastAPI):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.keras = tf.keras
        self.priceList = [1949.39, 1949.84, 1955.63, 1954.19, 1956.77, 1956.01, 1956.97, 1960.53, 1958, 1954.86, 1950.52, 1948.81, 1953.49, 1952.13,
                          1954.01, 1963.34, 1956.6, 1954.24, 1951.6, 1955.55, 1955.34, 1957.41, 1958.52, 1967.39, 1970.51, 1964.22, 1964.12, 1968.17, 1960.49, 1963.99]

    def predictAverage(self):
        model = self.keras.models.load_model(
            "apps/py/models/eth_model_average.h5")
        prices = tf.data.Dataset.from_tensor_slices([[self.priceList]])
        forecast = model.predict(prices)
        forecast = forecast[0, 0]
        return int(forecast)

    def predictCnn(self):
        model = self.keras.models.load_model(
            "apps/py/models/eth_model_cnn.h5")
        prices = tf.data.Dataset.from_tensor_slices([[self.priceList]])
        forecast = model.predict(prices)
        forecast = forecast[0, 0, 0]
        return int(forecast)


# test = PredictorAPI()
# print(test.predictCnn())
