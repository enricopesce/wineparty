import os
import argparse

def merge_files(start_dir, output_file, extensions):
    """
    Recursively walk through directories and merge contents of files with specified extensions.
    
    Args:
        start_dir (str): Starting directory path
        output_file (str): Path to the output file
        extensions (list): List of file extensions to include (e.g., ['.txt', '.md'])
    """
    # Convert extensions to lowercase for case-insensitive comparison
    extensions = [ext.lower() if not ext.startswith('.') else ext.lower() for ext in extensions]
    
    with open(output_file, 'w', encoding='utf-8') as outfile:
        for root, _, files in os.walk(start_dir):
            for file in files:
                file_ext = os.path.splitext(file)[1].lower()
                if file_ext in extensions:
                    file_path = os.path.join(root, file)
                    try:
                        # Write file header
                        outfile.write(f"\n{'='*80}\n")
                        outfile.write(f"File: {file_path}\n")
                        outfile.write(f"{'='*80}\n\n")
                        
                        # Write file contents
                        with open(file_path, 'r', encoding='utf-8') as infile:
                            outfile.write(infile.read())
                            outfile.write('\n')  # Add newline between files
                            
                    except Exception as e:
                        outfile.write(f"Error reading file {file_path}: {str(e)}\n")

def main():
    parser = argparse.ArgumentParser(description='Merge contents of multiple files into a single file.')
    parser.add_argument('directory', help='Starting directory path')
    parser.add_argument('output', help='Output file path')
    parser.add_argument('--extensions', nargs='+', required=True,
                        help='List of file extensions to include (e.g., .txt .md .py)')
    
    args = parser.parse_args()
    
    # Verify directory exists
    if not os.path.isdir(args.directory):
        print(f"Error: Directory '{args.directory}' does not exist.")
        return
    
    try:
        merge_files(args.directory, args.output, args.extensions)
        print(f"Successfully merged files into {args.output}")
    except Exception as e:
        print(f"An error occurred: {str(e)}")

if __name__ == "__main__":
    main()