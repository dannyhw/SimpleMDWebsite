$(function(){
     cur_url = window.location.href;
     if (cur_url.indexOf("home.html") > -1 ){
       end = cur_url.indexOf("home.html");
       cur_url = cur_url.substring(0,end);
     }
     if (cur_url[cur_url.length -1] == '#'){
       cur_url = cur_url.substring(0, cur_url.length -1);
     }
     if (cur_url[cur_url.length-1] != '/'){
       alert(cur_url);
       cur_url = cur_url + '/';
     }
     $("#overview").load(cur_url+"overview.html");
     $("#skills").load(cur_url+"skills.html");
     $("#contact").load(cur_url+"contact.html");
});
