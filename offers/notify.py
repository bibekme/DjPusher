import os
import pusher

pusher_client = pusher.Pusher(
    app_id=os.environ.get("PUSHER_APP_ID", "YOUR_DEFAULT_PUSHER_APP_ID"),
    key=os.environ.get("PUSHER_KEY", "YOUR_DEFAULT_PUSHER_KEY"),
    secret=os.environ.get("PUSHER_SECRET", "YOUR_DEFAULT_PUSHER_SECRET"),
    cluster=os.environ.get("PUSHER_CLUSTER", "YOUR_DEFAULT_PUSHER_CLUSTER"),
    ssl=True,
)
