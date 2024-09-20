/**
 * Représente un héros avec ses informations professionnelles et personnelles.
 *
 * @typed {Object} HeroType
 * @property {string} name - Le nom du héros.
 * @property {string} jobName - Le titre du poste du héros.
 * @property {string} job - La description du travail ou du rôle du héros.
 * @property {string} mail - L'adresse email du héros.
 * @property {string} location - La localisation géographique du héros.
 * @property {string} mobility - Les informations sur la mobilité du héros (par exemple, s'il est mobile ou non).
 */
export type HeroType = {
  name: string;
  jobName: string;
  job: string;
  mail: string;
  location: string;
  mobility: string;
};
