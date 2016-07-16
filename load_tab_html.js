$(function(){
     cur_url = window.location.href;
     new_url = cur_url;
     url_length = cur_url.length;
     if (cur_url[url_length -1] != '/'){
       cur_url = cur_url + '/';
       if (cur_url.indexOf("home.html") > -1 ){
         end = cur_url.indexOf("home.html");
         new_url = cur_url.substring(0,end);
       }
     }
     $("#overview").load(new_url+"overview.html");
     $("#skills").load(new_url+"skills.html");
     $("#contact").load(new_url+"contact.html");
});
