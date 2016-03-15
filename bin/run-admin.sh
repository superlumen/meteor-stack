#!/bin/bash

cd admin/ && MONGO_URL='mongodb://localhost:3001/meteor' meteor run --port 3010 --settings settings.json