using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace FS.Abp.Themes.Pages
{
    public class IndexModel : ThemesPageModel
    {
        public void OnGet()
        {
            
        }

        public async Task OnPostLoginAsync()
        {
            await HttpContext.ChallengeAsync("oidc");
        }
    }
}