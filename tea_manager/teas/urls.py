from rest_framework import routers
from .api import TeaViewSet
from .api import WishlistViewSet

router = routers.DefaultRouter()
router.register('api/teas', TeaViewSet, 'teas')
router.register('api/wishlist', WishlistViewSet, 'wishlist')

urlpatterns = router.urls

# from django.urls import path

# from .views import TeaListView, TeaDetailView

# urlpatterns = [
#   path('', TeaListView.as_view()),
#   path('<pk>', TeaDetailView.as_view()),
# ]