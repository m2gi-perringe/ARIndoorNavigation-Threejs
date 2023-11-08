import { MeshStandardMaterial, Vector3, PlaneGeometry, TextureLoader, MeshBasicMaterial, Mesh, MathUtils, Group, BoxGeometry } from "three";
import CasualFlapMapImageUrl from "/CasualFlatMap.png";

function setupNavigationAreaGeometry() {
    // create occluder material
    const occluderMaterial = new MeshStandardMaterial({ color: 0xffc990 });
    //occluderMaterial.colorWrite = false;

    // create room map
    const navigationArea = new Group();
/*     navigationArea.add(createWallElement(new Vector3(-4.85, 1, -0.74), new Vector3(0, 0, 0), new Vector3(0.0625, 3, 1.578), occluderMaterial));
    navigationArea.add(createWallElement(new Vector3(-2.98, 1, -2.65), new Vector3(0, 0, 0), new Vector3(0.0625, 3, 3.51), occluderMaterial));
    navigationArea.add(createWallElement(new Vector3(1, 1, -2.55), new Vector3(0, 0, 0), new Vector3(0.0625, 3, 3.467), occluderMaterial));
    navigationArea.add(createWallElement(new Vector3(1, 1, 2.18), new Vector3(0, 0, 0), new Vector3(0.0625, 3, 4.475), occluderMaterial));
    navigationArea.add(createWallElement(new Vector3(-0.689, 1, 0), new Vector3(0, 0, 0), new Vector3(8.518, 3, 0.06), occluderMaterial));
    navigationArea.add(createWallElement(new Vector3(0.97, 1, -4.05), new Vector3(0, 0, 0), new Vector3(7.91, 3, 0.06), occluderMaterial));
    navigationArea.add(createWallElement(new Vector3(-3.34, 1, -1.29), new Vector3(0, 0, 0), new Vector3(0.86, 3, 0.06), occluderMaterial));
    navigationArea.add(createWallElement(new Vector3(4.86, 1, -0.01), new Vector3(0, 0, 0), new Vector3(0.06, 3, 9.114), occluderMaterial));
    navigationArea.add(createWallElement(new Vector3(-1.6, 1, -0.88), new Vector3(0, 0, 0), new Vector3(2.85, 3, 0.06), occluderMaterial));
    navigationArea.add(createWallElement(new Vector3(2.9, 1, 4.06), new Vector3(0, 0, 0), new Vector3(4, 3, 0.06), occluderMaterial));
 */
    //1
    navigationArea.add(createWallElement(new Vector3(0,1.5,3.5), new Vector3(0, 0, 0), new Vector3(0.1,3,7), occluderMaterial));
    //2
    navigationArea.add(createWallElement(new Vector3(4.5,1.5,7), new Vector3(0, 0, 0), new Vector3(9,3,0.1), occluderMaterial));
    //3
    navigationArea.add(createWallElement(new Vector3(10.5,1.5,3.5), new Vector3(0, 0, 0), new Vector3(0.1,3,7), occluderMaterial));
    //4
    navigationArea.add(createWallElement(new Vector3(5.25,1.5,0), new Vector3(0, 0, 0), new Vector3(10.5,3,0.1), occluderMaterial));
    //5
    navigationArea.add(createWallElement(new Vector3(10.6,1.5,3.05), new Vector3(0, 0, 0), new Vector3(0.1,3,6.1), occluderMaterial));
    //6
    navigationArea.add(createWallElement(new Vector3(15,1.5,0), new Vector3(0, 0, 0), new Vector3(8.8,3,0.1), occluderMaterial));
    //7
    navigationArea.add(createWallElement(new Vector3(19.4,1.5,3.5), new Vector3(0, 0, 0), new Vector3(0.1,3,7), occluderMaterial));
    //8
    navigationArea.add(createWallElement(new Vector3(16.4,1.5,7), new Vector3(0, 0, 0), new Vector3(6,3,0.1), occluderMaterial));
    //9
    navigationArea.add(createWallElement(new Vector3(12.5,1.5,6.55), new Vector3(0, 0, 0), new Vector3(0.1,3,0.9), occluderMaterial));
    //10
    navigationArea.add(createWallElement(new Vector3(11.55,1.5,6.1), new Vector3(0, 0, 0), new Vector3(1.9,3,0.1), occluderMaterial));
    //11
    navigationArea.add(createWallElement(new Vector3(11.2,1.5,7), new Vector3(0, 0, 0), new Vector3(2.6,3,0.1), occluderMaterial));
    //12
    navigationArea.add(createWallElement(new Vector3(9.7,1.5,8.8), new Vector3(0, 0, 0), new Vector3(19.4,3,0.1), occluderMaterial));
    //13
    navigationArea.add(createWallElement(new Vector3(0,1.5,7.9), new Vector3(0, 0, 0), new Vector3(0.1,3,1.8), occluderMaterial));
    //14
    navigationArea.add(createWallElement(new Vector3(19.4,1.5,7.9), new Vector3(0, 0, 0), new Vector3(0.1,3,1.8), occluderMaterial));

    // create floor
    const floorGeometry = new PlaneGeometry(20, 9);
    const floorTexture = new TextureLoader().load(CasualFlapMapImageUrl);
    const floorMaterial = new MeshBasicMaterial({ map: floorTexture });
    const floorPlaneMesh = new Mesh(floorGeometry, floorMaterial);
    floorPlaneMesh.rotateX(MathUtils.degToRad(270));
    floorPlaneMesh.renderOrder = 3;
    // floorPlaneMesh.visible = false;
    navigationArea.add(floorPlaneMesh);

    // navigation area parent for easier placement
    const navigationAreaParent = new Group();
    navigationAreaParent.add(navigationArea);

    return navigationAreaParent;
}

function createWallElement(position, rotation, scale, occluderMaterial) {
    const occluderGeometry = new BoxGeometry(scale.x, scale.y, scale.z);
    const occluderMesh = new Mesh(occluderGeometry, occluderMaterial);
    occluderMesh.position.set(position.x, position.y, position.z);
    occluderMesh.renderOrder = 2;

    return occluderMesh;
}

export { setupNavigationAreaGeometry };
