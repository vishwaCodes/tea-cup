from teas.models import Tea
from rest_framework import viewsets, permissions
from .serializers import TeaSerializer

# Tea Viewset
class TeaViewSet(viewsets.ModelViewSet):
  queryset = Tea.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = TeaSerializer