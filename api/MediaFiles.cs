using System.IO;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;

namespace com.chrisrichards
{
    public static class MediaFiles
    {
        private const string Route = "mediafiles";

        [FunctionName("CreateMediaFile")]
        public static async Task<IActionResult>CreateMediaFile(
            [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = Route)]HttpRequest req, ILogger log)
        {
            log.LogInformation("CreateMediaFile");
            var requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            var options = new JsonSerializerOptions {
                PropertyNameCaseInsensitive = true
            };
            var input = JsonSerializer.Deserialize<MediaFileCreateModel>(requestBody, options);

            log.LogInformation($"CreateMediaFile: {input.FileName}");

            var todo = new MediaFile() { 
                FileName = input.FileName,
                Description = input.Description,
                SourceUrl = input.SourceUrl,
                Url = input.SourceUrl
            };
            Store.AddMediaFile(todo);
            return new OkObjectResult(todo);
        }

        [FunctionName("GetMediaFiles")]
        public static IActionResult GetMediaFiles(
            [HttpTrigger(AuthorizationLevel.Function, "get", Route = Route)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("GetMediaFiles");

            var mediaFiles = Store.GetMediaFiles();
            return new OkObjectResult(mediaFiles);
        }

        [FunctionName("GetMediaFileById")]
        public static IActionResult GetMediaFileById(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = Route + "/{id}")]HttpRequest req, ILogger log, string id)
        {
            var mediaFile = Store.GetMediaFileById(id);
            if (mediaFile == null)
            {
                return new NotFoundResult();
            }
            return new OkObjectResult(mediaFile);
        }

        [FunctionName("UpdateMediaFile")]
        public static async Task<IActionResult> UpdateMediaFile(
            [HttpTrigger(AuthorizationLevel.Anonymous, "put", Route = Route + "/{id}")]HttpRequest req, ILogger log, string id)
        {
            var mediaFile = Store.GetMediaFileById(id);
            if (mediaFile == null)
            {
                return new NotFoundResult();
            }

            var requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            var options = new JsonSerializerOptions {
                PropertyNameCaseInsensitive = true
            };
            var updated = JsonSerializer.Deserialize<MediaFileUpdateModel>(requestBody, options);

            mediaFile.FileName = updated.FileName;
            mediaFile.Description = updated.Description;
            mediaFile.SourceUrl = updated.SourceUrl;

            return new OkObjectResult(mediaFile);
        }

        [FunctionName("DeleteMediaFile")]
        public static IActionResult DeleteMediaFile(
            [HttpTrigger(AuthorizationLevel.Anonymous, "delete", Route = Route + "/{id}")]HttpRequest req, ILogger log, string id)
        {
            var mediaFile = Store.GetMediaFileById(id);
            if (mediaFile == null)
            {
                return new NotFoundResult();
            }

            Store.RemoveMediaFile(mediaFile.Id);
            return new OkObjectResult(mediaFile);
        }
    }
}
