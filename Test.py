import time
import sys

# List of texts to display
messages = ["Hello, GitHub!", "Welcome to Python!", "Enjoy Coding!", "Keep Learning!"]

# Number of cycles to repeat
for i in range(5):  # Change 5 to a higher number if you want a longer loop
    for message in messages:
        # Print the message, overwrite the previous one
        sys.stdout.write('\r' + message + '   ')  # '\r' brings the cursor back to the start
        sys.stdout.flush()
        time.sleep(1)  # Wait for 1 second before changing text

print("\nDone Prerit!, looks better")  # Move to the next line after finishing

