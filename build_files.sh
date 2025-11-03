#!/bin/bash
apt-get update && apt-get install -y sqlite3 libsqlite3-dev
python3 -m pip install -r requirements.txt
python3 manage.py collectstatic --noinput
