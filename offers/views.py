from rest_framework.viewsets import ModelViewSet

from offers.models import Offer
from offers.serializers import OfferSerializer


class OfferViewSet(ModelViewSet):
    queryset = Offer.objects.order_by("-id").all()
    serializer_class = OfferSerializer
