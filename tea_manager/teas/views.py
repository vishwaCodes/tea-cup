# from rest_framework import ListAPIView, RetrieveAPIView

# from teas.models import Tea
# from .serializers import TeaSerializer

# class TeaListView(ListAPIView):
#   queryset = Tea.objects.all()
#   serializer_class = TeaSerializer


# class TeaDetailView(RetrieveAPIView):
#   queryset = Tea.objects.all()
#   serializer_class = TeaSerializer

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from teas.models import Wishlist
from .serializers import WishlistSerializer

@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'Delete':'/api/wishlist/<str:pk>/',
	}

	return Response(api_urls)

@api_view(['GET', ])
def api_detail_wish_view(request, slug):
  try:
    wish_post = Wishlist.objects.get(slug=slug)
  except Wishlist.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)

  if request.method == "GET":
    serializer = WishlistSerializer(wish_post)
    return Response(serializer.data)


@api_view(['PUT', ])
def api_update_wish_view(request, slug):
  try:
    wish_post = Wishlist.objects.get(slug=slug)
  except Wishlist.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)

  if request.method == "PUT":
    serializer = WishlistSerializer(wish_post, data=request.data)
    data = {}
    if serializer.is_valid():
      serializer.save()
      data["success"] = "update successful"
      return Response(data=data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# @api_view(['DELETE', ])
# def api_delete_wish_view(request, slug):
#   try:
#     wish_post = Wishlist.objects.get(slug=slug)
#   except Wishlist.DoesNotExist:
#     return Response(status=status.HTTP_404_NOT_FOUND)

#   if request.method == "DELETE":
#     operation = wish_post.delete()
#     data = {}
#     if operation:
#       data["success"] = "delete successful"
#     else:
#       data["failure"] = "delete failed"
#     return Response(data=data)


@api_view(['DELETE'])
def wishDelete(request, pk):
	wishlist = Wishlist.objects.get(id=pk)
	wishlist.delete()

	return Response('Item succsesfully delete!')



@api_view(['POST', ])
def api_create_wish_view(request):
  account = Account.objects.get(pk=1)

  wish_post = Wishlist(author=author)

  if request.method == "POST":
    serializer = WishlistSerializer(wish_post, data=request.data)
    data = {}
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)