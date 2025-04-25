use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};

#[get("/")]
async fn test() -> impl Responder {
    HttpResponse::Ok().body("test")
}

#[post("/echo")]
async fn echo(req_body: String) -> impl Responder {
    HttpResponse::Ok().body(req_body)
}

async fn manual_check() -> impl Responder {
    HttpResponse::Ok().body("Text Testing")
}

fn main(){
  
}
