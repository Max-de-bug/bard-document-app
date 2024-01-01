from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_GET, require_POST

from .utils import process_document


@csrf_exempt
@require_GET
def greeting(request):
    return HttpResponse("Hello world!")


@csrf_exempt
@require_POST
def upload_file(request):
    print(request)
    uploaded_file = request.FILES.get("file")
    print(uploaded_file)
    # if uploaded_file:
    #     try:
    #          Process the document using the provided code
    #          processed_result = process_document(uploaded_file)

    #          return JsonResponse({"result": processed_result})
    #     except Exception as e:
    #         return JsonResponse({"error": str(e)}, status=500)

    # return JsonResponse({"error": "No file uploaded"}, status=400)
    return JsonResponse({"result": "success"})
