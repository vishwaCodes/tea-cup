from teas.models import Tea
from teas.models import Wishlist
from rest_framework import viewsets, permissions
from .serializers import TeaSerializer

# Tea Viewset
class TeaViewSet(viewsets.ModelViewSet):
  queryset = Tea.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = TeaSerializer


# Wishlist Viewset
class WishlistViewSet(viewsets.ModelViewSet):
  permission_classes = [
    permissions.IsAuthenticated
  ]

  serializer_class = TeaSerializer

  def get_queryset(self):
    return self.request.user.wishlist.all()

  def perform_create(self, serializer):
    serializer.save(user=self.request.user)
