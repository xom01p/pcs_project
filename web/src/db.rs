use mysql::*;
use mysql::prelude::*;
use std::sync::Arc;
use tokio::sync::Mutex;

pub type DbPool = Arc<Mutex<Pool>>;

fn main(){
  
}
