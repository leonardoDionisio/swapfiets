export interface bikeList {
    bikes: bikeItem[],
}

export interface bikeDetails {
    bike: bikeDetailsItens
}

export interface bikeItem {
    cycle_type_slug: string | null;
    date_stolen: number | null;
    description: string | null;
    external_id: number | null;
    frame_colors: string[] | null;
    frame_model: string | null;
    id: number | null;
    is_stock_img: boolean | null;
    large_img: string | null;
    location_found: string | null;
    manufacturer_name: string | null;
    propulsion_type_slug: string | null;
    registry_name: string | null;
    registry_url: string | null;
    serial: string | null;
    status: string | null;
    stolen: boolean | null;
    stolen_coordinates: [number, number] | null; // [latitude, longitude]
    stolen_location: string | null;
    thumb: string | null;
    title: string | null;
    url: string | null;
    year: number | null;
}

export interface bikeDetailsItens extends Partial<bikeItem> {
    registration_created_at: number | null;
    registration_updated_at: number | null;
    api_url: string | null,
    manufacturer_id: number | null,
    paint_description: string | null,
    name: string | null,
    frame_size: string | null;
    rear_tire_narrow: boolean | null;
    front_tire_narrow: boolean | null;
    type_of_cycle: string | null;
    test_bike: boolean | null;
    rear_wheel_size_iso_bsd: number | null;
    front_wheel_size_iso_bsd: number | null;
    handlebar_type_slug: string | null;
    frame_material_slug: string | null;
    front_gear_type_slug: string | null;
    rear_gear_type_slug: string | null;
    extra_registration_number: string | null;
    additional_registration: string | null;
    stolen_record: StolenRecord | null;
    public_images: PublicImage[];
    components: unknown[]; 
}

export interface StolenRecord {
    date_stolen: number;
    location: string;
    latitude: number;
    longitude: number;
    theft_description: string;
    locking_description: string;
    lock_defeat_description: string;
    police_report_number: string;
    police_report_department: string;
    created_at: number;
    create_open311: boolean;
    id: number;
  }

export interface PublicImage {
    name: string;
    full: string;
    large: string;
    medium: string;
    thumb: string;
    id: number;
}