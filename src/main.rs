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

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(test)
            .route("/hey", web::get().to(manual_check))
    })
    .bind(("0.0.0.0", 8080))?
    .run()
    .await
}
