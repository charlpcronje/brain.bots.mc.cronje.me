from fastapi.middleware.cors import CORSMiddleware

origins = [
    "https://brain.bots.mc.cronje.info",
    "https://brain.bots.mc.cronje.info:5050",
    "https://brain.bots.mc.cronje.info:5051",
    "https://www.brain.bots.mc.cronje.info",
    "https://www.brain.bots.mc.cronje.info:5050",
    "https://www.brain.bots.mc.cronje.info:5051",
    "http://brain.bots.mc.cronje.info",
    "http://www.brain.bots.mc.cronje.info",
    "*"
]

def add_cors_middleware(app):
    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
