extern crate rustface;

use rustface::{Detector, FaceInfo, ImageData};
use image::{DynamicImage};

fn main() {

    let mut detector = rustface::create_detector("src/foto3.jpg").unwrap();
    detector.set_min_face_size(20);
    detector.set_score_thresh(2.0);
    detector.set_pyramid_scale_factor(0.8);
    detector.set_slide_window_step(4, 4);
    
    let image: DynamicImage = match image::open("src/foto3.jpg") {
        Ok(image) => image,
        Err(message) => {
            println!("Failed to read image: {}", message);
            std::process::exit(1)
        }
    };

    let gray = image.to_luma8();
    let (width, height) = gray.dimensions();

    let mut photo = ImageData::new(&gray, width, height);
    for face in detector.detect(&mut photo).into_iter() {
        // print confidence score and coordinates
        println!("found face: {:?}", face);
    }
}