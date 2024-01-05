from django.core.validators import FileExtensionValidator, MaxValueValidator
from django.forms import ValidationError
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
    if not upload_file:
        return JsonResponse({"error": "No file uploaded"}, status=400)

    # validate file extention
    validator = FileExtensionValidator(allowed_extensions=["docx"])
    try:
        validator(uploaded_file)
    except ValidationError as e:
        return JsonResponse({"error": f"Invalid file format: {e}"}, status=400)

    max_size_validator = MaxValueValidator(limit_value=4 * 1024 * 1024)
    try:
        max_size_validator(uploaded_file.size)
    except ValidationError as e:
        return JsonResponse(
            {"error": f"File size exceeds the allowed limit: {e}"}, status=400
        )
    # if uploaded_file:
    #     try:
    #          Process the document using the provided code
    #          processed_result = process_document(uploaded_file)

    #          return JsonResponse({"result": processed_result})
    #     except Exception as e:
    #         return JsonResponse({"error": str(e)}, status=500)

    # return JsonResponse({"error": "No file uploaded"}, status=400)
    return JsonResponse({"result": "success"})
