from rest_framework.routers import SimpleRouter
from .views import OfferViewSet


router = SimpleRouter()

router.register("offers", OfferViewSet, basename="offers")

urlpatterns = router.urls
