from rest_framework import routers
from .api import TeaViewSet

router = routers.DefaultRouter()
router.register('api/teas', TeaViewSet, 'teas')

urlpatterns = router.urls
