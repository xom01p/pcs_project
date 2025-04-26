use actix_files::Files;
use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};
use std::sync::Arc;
use tokio::sync::Mutex;
use mysql::*;

type DbPool = Arc<Mutex<Pool>>;

#[get("/api/test")]
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

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(test)
            .route("/hey", web::get().to(manual_check))
            .service(Files::new("/","./static").index_file("index.html"))
    })
    .bind(("0.0.0.0", 8080))?
    .run()
    .await
}
