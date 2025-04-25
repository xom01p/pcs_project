use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};

#[get("/")]
async fn test() -> impl Responder {
  HttpResponse::Ok().body("test")
}

fn main(){
  
}
