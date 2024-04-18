from django.urls import path, include
from rest_framework.routers import DefaultRouter
from core.views import AirportViewSet, AirlineViewSet, RunwayViewSet, FlightViewSet

router = DefaultRouter()
router.register(r'airport', AirportViewSet)
router.register(r'airline', AirlineViewSet)
router.register(r'runway', RunwayViewSet)
router.register(r'flight', FlightViewSet)

urlpatterns = [
    path('', include(router.urls)),
]