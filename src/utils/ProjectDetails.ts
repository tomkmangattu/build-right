
export interface ProjectDetails {
  id : number;
  title: string;
  location: string;
  yearOfCompletion: string;
  folder: string;
  imagePaths : string[];
}

/**
 * Reads and parses a CSV file containing project layout information
 * @param csvPath - Relative path to the CSV file from the public directory
 * @returns Promise resolving to an array of project detail objects
 */

const expectedHeaders = ['Title', 'Location', 'Year of Completion', 'Folder', 'Image Names'];

export async function getProjectDetailsFromCSV(folder: string): Promise<ProjectDetails[]> {
  try {
    // Use fetch instead of fs
    const response = await fetch(`/${folder}/layout.csv`);
    if (!response.ok) {
      throw new Error(`Failed to fetch CSV file: ${response.statusText}`);
    }
    
    const fileContent = await response.text();
    
    // Split into lines and remove comments or empty lines
    const lines = fileContent.split('\n')
      .filter(line => line.trim() && !line.trim().startsWith('//'));
    
    const results: ProjectDetails[] = [];
    
    // Process each data row
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      const values = line.split(',').map(value => value.trim());
      
      if (values.length !== expectedHeaders.length) {
        console.warn(`Skipping row ${i} due to column count mismatch`);
        continue;
      }

      const parentFolder = values[3].trim();
      const imagePaths = values[4].split(';').map(path => `/${folder}/${parentFolder}/${path.trim()}`);

      const projectDetail: ProjectDetails = {
        id: i,
        title: values[0],
        location: values[1],
        yearOfCompletion: values[2],
        folder: parentFolder,
        imagePaths: imagePaths
      };
      results.push(projectDetail);
    }
    
    return results;
  } catch (error) {
    console.error('Error parsing CSV file:', error);
    throw error;
  }
}