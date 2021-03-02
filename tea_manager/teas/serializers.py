from rest_framework import serializers
from teas.models import Tea

# Tea Serializer
class TeaSerializer(serializers.ModelSerializer):
  class Meta:
    model = Tea
    fields = '__all__'
