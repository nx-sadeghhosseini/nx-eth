from fastapi import HTTPException
from apps.py.predictor import PredictorAPI

app = PredictorAPI()

@app.get("/")
async def root():
    return 'call /predict/average or /predict/cnn'

@app.get("/predict/{type}")
async def predict(type: str):
    try:
        if type == 'average':
            predict = app.predictAverage()
        else:
            predict = app.predictCnn()
    except Exception as inst:
        raise HTTPException(
            status_code=400, detail=inst.args
        )
    return "next hour prediction is {}".format(predict)
