from teas.models import Tea
from teas.models import Wishlist
from rest_framework import viewsets, permissions
from .serializers import TeaSerializer, WishlistSerializer

# Tea Viewset
class TeaViewSet(viewsets.ModelViewSet):
  queryset = Tea.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = TeaSerializer


# Wishlist Viewset
class WishlistViewSet(viewsets.ModelViewSet):
  queryset = Wishlist.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  
  # permission_classes = [
  #   permissions.IsAuthenticated
  # ]

  serializer_class = WishlistSerializer

  # def get_queryset(self):
  #   return self.request.user.wishlist.all()

  # def perform_create(self, serializer):
  #   serializer.save(user=self.request.user)
