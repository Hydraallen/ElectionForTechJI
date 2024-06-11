#!/usr/bin/env python3

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import logging
import asyncio


"""
Canvas App

This file contains all the APIs to access the
configuration file/canvas backend, etc..
"""

task = asyncio.Event()



app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format="[%(levelname)s] %(message)s")
currentObj = {}
status = 0


@app.get("/data")
async def get_obj():
    global status
    status = 1
    await task.wait()
    status = 0
    obj = currentObj
    obj["code"]=""
    return currentobj


@app.post("/data")
async def update_obj(request: Request):
    global currentObj
    currentObj = await request.json()
    if "code" not in currentObj or currentObj["code"] != "ne@ifn90h":
        return JSONResponse(status_code=404, content={"message": "not found"})
    task.set()
    if status != 0:
        await asyncio.sleep(0.1)
    task.clear()
    return JSONResponse(status_code=200, content={"message": "success"})
