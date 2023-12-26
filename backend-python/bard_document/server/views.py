from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST

from .utils import process_document


@csrf_exempt
@require_POST
def upload_file(request):
    uploaded_file = request.FILES.get("file")

    if uploaded_file:
        try:
            # Process the document using the provided code
            processed_result = process_document(uploaded_file)

            return JsonResponse({"result": processed_result})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "No file uploaded"}, status=400)
