from rest_framework import routers
from .api import TeaViewSet

router = routers.DefaultRouter()
router.register('api/teas', TeaViewSet, 'teas')

urlpatterns = router.urls

# from django.urls import path

# from .views import TeaListView, TeaDetailView

# urlpatterns = [
#   path('', TeaListView.as_view()),
#   path('<pk>', TeaDetailView.as_view()),
# ]