from rest_framework import serializers
from teas.models import Tea
from teas.models import Wishlist

# Tea Serializer
class TeaSerializer(serializers.ModelSerializer):
  class Meta:
    model = Tea
    fields = ('name', 'description', 'image', 'user', 'id',)

class WishlistSerializer(serializers.ModelSerializer):
  class Meta:
    model = Wishlist
    fields = ('name', 'id',)