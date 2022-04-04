from django.dispatch import receiver
from django.db.models.signals import post_save

from offers.models import Offer
from offers.notify import pusher_client


@receiver(post_save, sender=Offer)
def send_realtime_notification(sender, instance, created, **kwargs):
    offer = instance

    if created:
        pusher_client.trigger(
            "offer-channel",
            "my-offer",
            {"title": offer.title, "message": offer.message},
        )
