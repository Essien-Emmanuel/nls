# nls

A command-line tool to list files and folders in the current directory.

## Installation

Follow the steps below to install and set up the `nls` command-line tool.

### Unix-based Systems (Linux, macOS, windows)

1. **Clone the repository**:

    ```sh
    git clone https://github.com/yourusername/nls.git
    cd nls
    ```

2. **Make the `index.js` file executable**:

    ```sh
    chmod +x index.js
    ```

3. **Install the package and create a symlink**:

    ```sh
    npm install
    npm link
    ```

### Windows

1. **Clone the repository**:

    ```sh
    git clone https://github.com/yourusername/nls.git
    cd nls
    ```

2. **Install the package and create a symlink**:

    ```sh
    npm install
    npm link
    ```

## Usage

After installation, you can use the `nls` command to list files and folders in the current directory.


## Using nls with Arguments
```sh
You can use nls with arguments to list files and directories in different locations:
```
To list files and folders in the parent directory:

sh
Copy code
nls ..
To list files and folders in the home directory:

sh
Copy code
nls ~/
