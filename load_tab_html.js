$(function(){
     cur_url = window.location.href;
     new_url = cur_url;
     url_length = cur_url.length;
     if (cur_url[url_length -1] != '/'){
       cur_url = cur_url + '/';
       start = url_length - 9; end = url_length;
       sub = cur_url.substring(start, end);
       if (sub == "home.html" ){
         new_url = cur_url.substring(0,start);
       }
      //  alert(sub + " " + url_length + " " + cur_url + " " + new_url)
     }
     $("#overview").load(new_url+"overview.html");
     $("#skills").load(new_url+"skills.html");
     $("#contact").load(new_url+"contact.html");
});
