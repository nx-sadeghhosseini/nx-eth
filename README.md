# NX Ether Price Predictor

## What's inside?

This mono repo includes sample usage of tensorflow models in js/python

*models in colab*
https://colab.research.google.com/drive/1bC54AdS9hrRAofnrdhE3hDrdStx3IM_D

### Apps and Packages

- `py`: sample usage of tensorflow in python
- `web`: sample usage of tensorflow in js
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo


### Prepare

```
npm install
```

In order to run the python project, please make sure python is installed and run following command

```
python3 -m venv env
```
*(above command, creates a new environment)*
```
source apps/py/env/bin/activate
```
*(above command, activates the new environment)*
```
pip3 install -r apps/py/requirements.txt
```
*(above command, installs all dependencies)*

### Run

*only if python virtual env is not activated already, run following*
```
source apps/py/env/bin/activate
```
To run both samples, simply run
```
npm run dev
```

### Tips
In order to close python virtual env, run 
```
deactivate
```
