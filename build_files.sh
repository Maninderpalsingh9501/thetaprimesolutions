#!/usr/bin/env bash
set -e

# install dependencies
pip install -r requirements.txt

# collect static into STATIC_ROOT
python manage.py collectstatic --noinput

# (optional) run migrations if you use an external DB
# python manage.py migrate --noinput
