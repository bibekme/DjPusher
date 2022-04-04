from django.db import models


class Offer(models.Model):
    title = models.CharField(max_length=255)
    message = models.CharField(max_length=500)

    def __str__(self) -> str:
        return self.title
