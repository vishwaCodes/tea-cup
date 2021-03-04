from rest_framework import serializers
from teas.models import Tea
from teas.models import Wishlist

# Tea Serializer
class TeaSerializer(serializers.ModelSerializer):
  class Meta:
    model = Tea
    fields = '__all__'

class WishlistSerializer(serializers.ModelSerializer):
  class Meta:
    model = Wishlist
    fields = 'name'